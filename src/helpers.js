export const slug = (text) => {

    //Đổi chữ hoa thành chữ thường
    let result = text.toLowerCase();
 
    //Đổi ký tự có dấu thành không dấu
    result = result.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    result = result.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    result = result.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    result = result.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    result = result.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    result = result.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    result = result.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    result = result.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    result = result.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    result = result.replace(/\-\-\-\-\-/gi, '-');
    result = result.replace(/\-\-\-\-/gi, '-');
    result = result.replace(/\-\-\-/gi, '-');
    result = result.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    result = '@' + result + '@';
    result = result.replace(/\@\-|\-\@|\@/gi, '');
    
    return result;
}