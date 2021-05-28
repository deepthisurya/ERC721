/* {
    tokenId: {
        name: 'Token name',
        description: 'Token description',
        url: 'image url'
    }

} */

class ImageInfo {

    constructor(id, name, description, url) {
        this.id = id,
            this.name = name,
            this.description = description,
            this.url = url;
    }
}

module.exports = ImageInfo;