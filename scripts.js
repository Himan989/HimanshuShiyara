// Load video data from JSON and render dynamically
fetch('videos.json')
    .then(response => response.json())
    .then(videos => {
        const videoGallery = document.getElementById('videoGallery');
        videoGallery.innerHTML = videos.map(video => `
            <div class="video-item ${video.category}" data-title="${video.name}">
                <iframe width="320" height="150" src=${video.src}></iframe>
                
                <div class="video-description-container">
                    <strong class="description-title">Description:</strong>
                    <p class="video-description">${video.description}</p>
                </div>
            </div>
        `).join('');
    });

// Filter functionality
function filterVideos(category) {
    const videos = document.querySelectorAll('.video-item');

    videos.forEach(video => {
        if (category === 'all' || video.classList.contains(category)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}
