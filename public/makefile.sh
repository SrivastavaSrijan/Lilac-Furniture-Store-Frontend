#!/bin/bash
create_image() {
  local dir=$1
  local filename=$2
  local output_file="$dir/$filename.png"
  
  # Create a transparent background (RGBA)
  convert -size 1920x1080 xc:#65475A "$output_file"
  
  # Draw white X lines
  convert "$output_file" -stroke white -strokewidth 5 -draw "line 0,0 1920,1080 line 0,1080 1920,0" "$output_file"
  
  # Add the file name as text
  convert "$output_file" -gravity North -pointsize 120 -fill white -annotate 0 "" "$output_file"
}
# Usage: create_image "output_directory" "image_filename_without_extension"


# Directories for each section
declare -a dirs=("gen")

# Names of the image files for each section
declare -a error=("error")


# Create directories if they don't exist
for dir in "${dirs[@]}"
do
  mkdir -p $dir
done

# Create placeholder images

for i in "${error[@]}"
do
   create_image "gen" "$i"
done