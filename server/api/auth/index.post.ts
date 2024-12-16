
export default defineEventHandler(async (event) => {
    const body = await readFormData(event);

    console.log(typeof body);

    console.log(body);

    
});
