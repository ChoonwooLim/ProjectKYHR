const ffmpegPath = require('ffmpeg-static');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'contents', '프로젝트경영한류_v2.mp4');
const outputPath = path.join(__dirname, 'contents', 'project_kyhr_optimized.mp4');

console.log(`Processing: ${inputPath}`);
console.log(`Output: ${outputPath}`);

// FFmpeg command for web optimization
// -c:v libx264: Use H.264 codec (widely supported)
// -crf 23: Balance between quality and size
// -preset medium: Good compression speed
// -movflags +faststart: Move metadata to start for streaming
// -vf scale=-2:720: Resize to 720p height (maintain aspect ratio)
const command = `"${ffmpegPath}" -i "${inputPath}" -c:v libx264 -crf 23 -preset medium -movflags +faststart -vf scale=-2:720 -c:a aac -b:a 128k "${outputPath}"`;

console.log('Starting compression... This may take a few minutes.');
const process = exec(command);

process.stdout.on('data', (data) => console.log(data));
process.stderr.on('data', (data) => console.error(data)); // FFmpeg outputs progress to stderr

process.on('close', (code) => {
    if (code === 0) {
        console.log('Video optimization completed successfully!');
        const oldSize = fs.statSync(inputPath).size / (1024 * 1024);
        const newSize = fs.statSync(outputPath).size / (1024 * 1024);
        console.log(`Original Size: ${oldSize.toFixed(2)} MB`);
        console.log(`New Size: ${newSize.toFixed(2)} MB`);
    } else {
        console.error(`FFmpeg process exited with code ${code}`);
    }
});
