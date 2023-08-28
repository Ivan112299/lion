$.ajax({
    type: "POST",
    url: "/test.php",
    success: function (data) {
        let data_photos = $.parseJSON(data)
        let photos = data_photos.slice(2)



        let container = document.querySelector('.admin-cont')
        photos.forEach((photo) => {
            let containerPhoto = document.createElement('div')
            let photoItem = document.createElement('img')
            let photoName = document.createElement('p')
            photoName.textContent  += photo
            photoItem.className = 'photo-mini'
            containerPhoto.className = 'cont-photo'
            photoItem.src = `photo/${photo}`
            photoItem.alt = photo
            container.append(containerPhoto)
            containerPhoto.append(photoItem)
            containerPhoto.append(photoName)
        })
    }
})