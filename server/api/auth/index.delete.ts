
export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    console.log(typeof body);

    console.log(body);
});
