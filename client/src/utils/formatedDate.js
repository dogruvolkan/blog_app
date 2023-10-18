export const FormatedDate = (time) =>{

    var date = new Date(time);

    var formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    });

    return formattedDate;
} 