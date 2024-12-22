#!/bin/bash
echo "Install packages"
sudo npm install

echo "Building frontend..."
sudo npm run build

echo "Copying dist to backend..."
sudo cp -r ./dist ../fortune-fir-backend/

echo "Deployment complete!"

