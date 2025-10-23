
from pydub import AudioSegment
import os

# gewünschte Zieldauer in Millisekunden
TARGET_DURATION = 1500  # 1.5 Sekunden

# Ordner mit MP3-Dateien
# Ordner mit deinen MP3-Dateien (hier: aktueller Ordner)
INPUT_FOLDER = "C:\\Users\\pemo\\Projekte\\GirlsITCamp\\AppInventor\\Projekte\\Material\\Sounddateien"
OUTPUT_FOLDER = "C:\\Users\\pemo\\Projekte\\GirlsITCamp\\AppInventor\\Projekte\\Material\\Sounddateien\\mp3s_trimmed"

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

for filename in os.listdir(INPUT_FOLDER):
    if filename.lower().endswith(".mp3"):
        input_path = os.path.join(INPUT_FOLDER, filename)
        output_path = os.path.join(OUTPUT_FOLDER, filename)

        sound = AudioSegment.from_file(input_path, format="mp3")

        # Nur kürzen – keine Auffüllung
        trimmed = sound[:TARGET_DURATION]

        trimmed.export(output_path, format="mp3")
        print(f"✂️  {filename} gekürzt auf {len(trimmed)} ms")

