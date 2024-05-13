function parseJson(jsonString) {
    try {
        const obj = JSON.parse(jsonString);
        return obj;
    } catch (error) {
        
        console.error('Error parsing JSON!', error);
        return null;
    }
}

const json = '{"name":"Shivam", "age":22, "is_student":true}';

const parsedData = parseJson(json);
console.log(parsedData);
