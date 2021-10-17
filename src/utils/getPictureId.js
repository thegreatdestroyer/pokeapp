export const getPictureId = (id) => {
    const num = Number(id);
    
    if(num < 10) {
        return `00${num}`;
    } else if (num > 9 && num < 100) {
        return `0${num}`;
    }
    
    return id;
};