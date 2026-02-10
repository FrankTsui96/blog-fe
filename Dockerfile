# 阶段 1: 构建
FROM node:24-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm i pnpm -g
RUN pnpm install
COPY . .
RUN pnpm run build

# 阶段 2: 运行
FROM nginx:stable-alpine
# 拷贝构建后的静态文件
COPY --from=build-stage /app/dist /usr/share/nginx/html
# 拷贝上面写好的 nginx.conf 覆盖默认配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]