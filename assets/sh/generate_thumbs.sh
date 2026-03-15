#!/bin/bash
# generate_thumbs.sh — generate 200px wide thumbnails for gallery in parallel

# -----------------------------
# CONFIG
# -----------------------------
IMG_DIR="assets/images/index_grid" # folder with full-res images
THUMB_DIR="$IMG_DIR/thumbs" # folder for thumbnails
THREADS=6 # number of parallel convert jobs
# -----------------------------

mkdir -p "$THUMB_DIR"

# array to hold background PIDs
pids=()
count=0

for f in "$IMG_DIR"/*.{jpg,png}; do
  # skip if no files match
  [ -e "$f" ] || continue
  # skip if file is inside thumbs folder
  if [[ "$f" == "$THUMB_DIR"* ]]; then
    continue
  fi

  filename=$(basename "$f")
  thumb="$THUMB_DIR/${filename%.*}_thumb.${filename##*.}"

  # skip if thumbnail already exists
  if [ -f "$thumb" ]; then
    echo "Skipping $thumb (already exists)"
    continue
  fi

  # generate thumbnail in background
  convert "$f" -resize 200x -strip -quality 85 "$thumb" &
  echo "Creating $thumb ..."
  pids+=($!)
  ((count++))

  # wait if we reached max parallel jobs
  if (( count >= THREADS )); then
    wait -n   # wait for any job to finish
    ((count--))
  fi
done

# wait for remaining background jobs
wait

echo "Thumbnail generation complete."
