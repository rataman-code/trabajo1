export default function handler(req, res) {
  res.status(200).json({
    mensaje: "Hola profe, este backend está levantado en Vercel."
  });
}
