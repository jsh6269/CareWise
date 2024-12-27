from flask import Flask, jsonify, request
from flask_cors import CORS
from ultralytics import YOLO
import base64
import io
from PIL import Image, ImageDraw

# Flask 애플리케이션 생성
app = Flask(__name__)
CORS(app)  # CORS 설정

# YOLO 모델 로드
model = YOLO('server/best.pt')
names = {
    0: '물온도 30°C로 세탁하세요.', 
    1: '물온도 40°C로 세탁하세요.',
    2: '물온도 50°C로 세탁하세요.',
    3: '물온도 60°C로 세탁하세요.',
    4: '물온도 70°C로 세탁하세요.',
    5: '물온도 95°C로 세탁하세요.',
    6: '표백제 사용 불가능해요.',
    7: '건조가 불가능해요.',
    8: '드라이클리닝이 불가능해요.', 
    9: '다림질이 불가능해요.',
    10: '스팀 다림질이 불가능해요.',
    11: '기계 건조가 불가능해요.',
    12: '물세탁이 불가능해요.',
    13: '웨트클리닝이 불가능해요.',
    14: '비틀어 짜지 마세요.',
    15: '모든 표백제 사용 가능해요.',
    16: '염소계 표백제를 사용하세요.',
    17: '젖은 채로 줄에 널어서 건조하세요.',
    18: '젖은 채로 줄에 널어서 그늘에서 건조하세요.',
    19: '드라이클리닝이 가능해요.',
    20: '모든 용제로 드라이클리닝이 가능해요.',
    21: '퍼클로로에틸렌 용제로 드라이클리닝하세요.',
    22: '낮은 온도로 드라이클리닝하세요.',
    23: '스팀 없이 드라이클리닝하세요.', 
    24: '탄화수소 용제로 드라이클리닝하세요.', 
    25: '적은 수분으로 드라이클리닝하세요.', 
    26: '짧은 시간 내로 드라이클리닝하세요.', 
    27: '뉘어서 건조하세요.', 
    28: '손세탁하세요.', 
    29: '다림질이 가능해요.', 
    30: '최고 온도 200˚C로 다림질하세요.', 
    31: '최고 온도 100˚C로 다림질하세요.', 
    32: '최고 온도 150˚C로 다림질하세요.',
    33: '걸어서 건조하세요.', 
    34: '그늘에서 걸어서 건조하세요.', 
    35: '매우 약하게 물세탁하세요.', 
    36: '물세탁이 가능해요..', 
    37: '약하게 물세탁하세요.', 
    38: '자연거조하세요.', 
    39: '비염소계 표백제를 사용하세요.', 
    40: '그늘에서 건조하세요.', 
    41: '스팀 다림질이 가능해요.', 
    42: '높은 온도로 기계건조하세요.', 
    43: '낮은 온도로 기계건조하세요.', 
    44: '중간 온도로 기계건조하세요.', 
    45: '열을 가하지 않고 기계건조하세요.', 
    46: '기계 건조가 가능해요.', 
    47: '웨트클리닝이 가능해요.', 
    48: '약하게 비틀어 짜세요.'}


def pil_to_base64(image):
    """
    PIL 이미지를 Base64 문자열로 변환하는 함수
    """
    buffered = io.BytesIO()
    image.save(buffered, format="JPEG")
    return "data:image/jpeg;base64," + base64.b64encode(buffered.getvalue()).decode("utf-8")


@app.route('/predict', methods=['POST'])
def predict():
    try:
        # 요청 데이터에서 base64 이미지를 추출
        data = request.get_json()
        image_base64 = data.get('image')

        if not image_base64:
            return jsonify({'error': 'No image provided'}), 400

        # Base64 디코딩 및 PIL 이미지 변환
        try:
            image_data = base64.b64decode(image_base64)
            image = Image.open(io.BytesIO(image_data)).convert("RGB")
        except Exception as e:
            return jsonify({'error': f'Image decoding failed: {str(e)}'}), 400

        # YOLO 모델로 이미지 처리
        try:
            results = model(image)
            
            # 결과 데이터 생성
            objects = []
            draw = ImageDraw.Draw(image)  # 원본 이미지에 박스를 그리기 위한 도구
            
            for idx, box in enumerate(results[0].boxes):
                # 박스 좌표 및 클래스 정보 추출
                x1, y1, x2, y2 = box.xyxy[0].tolist()  # 박스 좌표 (좌상단 x,y / 우하단 x,y)
                cls_idx = int(box.cls[0])  # 클래스 인덱스
                class_desc = names[cls_idx]  # 클래스 이름
                
                # 탐지된 객체의 박스 이미지를 잘라내기
                cropped_image = image.crop((x1, y1, x2, y2))
                
                # cropped 이미지를 Base64로 변환하여 응답에 포함
                cropped_image_base64 = pil_to_base64(cropped_image)
                
                # # 원본 이미지에 박스 그리기 (선택 사항)
                # draw.rectangle([x1, y1, x2, y2], outline="red", width=3)

                # 결과 추가
                objects.append({
                    "desc": class_desc,
                    "img": cropped_image_base64  # Base64 데이터 반환
                })
            
            # 원본 이미지를 Base64로 변환하여 응답에 포함
            original_image_base64 = pil_to_base64(image)

            return jsonify({
                "image": original_image_base64,
                "result": objects
            })

        except Exception as e:
            return jsonify({'error': f'Model inference failed: {str(e)}'}), 500

    except Exception as e:
        return jsonify({'error': f'Unexpected error: {str(e)}'}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
