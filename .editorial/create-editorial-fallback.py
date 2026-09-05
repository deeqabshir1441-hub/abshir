"""Original TV96 Live text/geometry artwork. No imported image or logo assets."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent.parent
canvas = Image.new('RGB', (1200, 630), '#071320')
draw = ImageDraw.Draw(canvas)
draw.rounded_rectangle((40, 40, 1160, 590), radius=32, outline='#1d4852', width=3)
draw.rectangle((88, 120, 100, 505), fill='#16c79a')
draw.ellipse((925, 90, 1325, 490), outline='#164039', width=35)
draw.ellipse((995, 160, 1255, 420), outline='#12322f', width=20)
fonts = Path('C:/Windows/Fonts')
draw.text((140, 154), 'TV96 LIVE', font=ImageFont.truetype(str(fonts / 'arialbd.ttf'), 92), fill='#16c79a')
draw.text((145, 287), 'FOOTBALL', font=ImageFont.truetype(str(fonts / 'arialbd.ttf'), 54), fill='#f1f5f9')
draw.text((145, 363), 'News & Guides', font=ImageFont.truetype(str(fonts / 'arial.ttf'), 46), fill='#b4c8d4')
draw.line((145, 461, 720, 461), fill='#1d4852', width=3)
canvas.save(root / 'editorial-fallback.png', optimize=True)
print((root / 'editorial-fallback.png').stat().st_size, 'bytes; 1200 x 630; original text and simple shapes')
