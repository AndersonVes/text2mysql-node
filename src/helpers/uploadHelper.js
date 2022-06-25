class UploadHelper {
    static getEfffect = (type, value) => {
        type = parseInt(type)
        value = parseInt(value)
        if(type === 2 || type === 3 || type === 9)
            return value - (value*2)

        return value
    }

    static formatDatetime(date, time) {
        return date.slice(0,4)+'-'+date.slice(4,6)+'-'+date.slice(6,8) + ' ' + time.slice(0,2) + ':' + time.slice(2,4) + ':' + time.slice(4,6)
    }
}

export default UploadHelper