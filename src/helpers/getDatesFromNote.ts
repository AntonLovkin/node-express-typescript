export default function getDatesFromNote(string:string) {
    const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    return string.match(datePattern)?.join(',\n');
}