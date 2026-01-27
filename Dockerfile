# ================================
# STAGE 1: Development
# ================================
FROM node:20-alpine AS development

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 4321

# Start in dev mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ================================
# STAGE 2: Build
# ================================
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build application
RUN npm run build

# ================================
# STAGE 3: Production
# ================================
FROM node:20-alpine AS production

WORKDIR /app

# Copy built application
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose port
EXPOSE 4321

# Start application
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
