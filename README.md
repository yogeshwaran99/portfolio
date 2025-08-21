# Portfolio

A personal portfolio website built with **React**.

## Preview

![preview](https://raw.githubusercontent.com/yogeshwaran99/portfolio/main/public/preview.png)

## Features

- Responsive design  
- Project showcase section  
- **Auto deployment to GitHub Pages using GitHub Actions**  
- **Dockerized for easy containerized setup**

## Tech Stack

- React  
- HTML & CSS
- GitHub Actions  
- Docker 

## Project Structure
```
portfolio/
├── Dockerfile              # Docker instructions to build/run the app
├── public/                 # Public files
├── src/                    
│   ├── assets/             # Images used in the app
│   ├── components/         
│   │   ├── About/          # About section
│   │   ├── Contact/        # Contact section
│   │   ├── Home/           # Home section
│   │   ├── Navbar/         # Navigation bar
│   │   └── Projects/       # Projects section
│   └── main.jsx
└── README.md
```
## Getting Started

To run the project locally:

```bash
# Clone the repository if not already
git clone https://github.com/yogeshwaran99/portfolio.git

# Go to project directory
cd portfolio

# install node packages
npm install

# Run the react App
npm run dev

# Project will start at
http://localhost:5173
```

## Run with Docker

```bash
# Clone the repository if not already
git clone https://github.com/yogeshwaran99/portfolio.git

# Build the Docker image
docker build -t portfolio .

# Run the container
docker run -p 3000:80 portfolio

# Project will start at
http://localhost:3000
```

