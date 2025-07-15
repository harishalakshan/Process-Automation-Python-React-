FROM python:3.11-slim AS backend

WORKDIR /app/backend
COPY backend/ .
RUN pip install flask flask-cors flask-socketio joblib sklearn

FROM node:20 AS frontend
WORKDIR /app/frontend
COPY frontend/ .
RUN npm ci

FROM backend AS final
COPY --from=frontend /app/frontend/build ./frontend_build
CMD ["sh", "-c", "FLASK_APP=app.py flask run --host=0.0.0.0"]