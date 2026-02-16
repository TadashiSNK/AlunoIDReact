import * as faceapi from "@vladmandic/face-api";
import canvas from "canvas";
import path from "path";

const { Canvas, Image, ImageData } = canvas;

faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

let carregado = false;

export default async function carregarModelos() {
  if (carregado) return;

  const modelPath = path.resolve("public/models");

  await faceapi.nets.tinyFaceDetector.loadFromDisk(modelPath);
  await faceapi.nets.faceLandmark68Net.loadFromDisk(modelPath);
  await faceapi.nets.faceRecognitionNet.loadFromDisk(modelPath);

  console.log("Modelos face-api carregados");
  carregado = true;
}

export async function gerarDescritor(imgPath) {
  await carregarModelos();

  const img = await canvas.loadImage(imgPath);

  const det = await faceapi
    .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptor();

  if (!det) return null;

  return Array.from(det.descriptor);
}