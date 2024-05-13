function parseJson(jsonString) {
    try {
        const obj = JSON.parse(jsonString);
        return obj;
    } catch (error) {
        
        console.error('Error parsing JSON!', error);
        return null;
    }
}

const json = '{"name":"John", "age":30, "is_student":false}';

const parsedData = parseJson(json);
console.log(parsedData);