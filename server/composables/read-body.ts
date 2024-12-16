import { type H3Event, readBody, readFormData, getHeader, type EventHandlerRequest } from 'h3';

export default async function readRequesrBody(event: H3Event<EventHandlerRequest>): Promise<Record<string, unknown>> {
    const contentType = getHeader(event, 'content-type')?.toLowerCase();

    if (contentType === 'application/json') {
        return JSON.parse(await readBody(event));
    } else if (contentType === 'application/x-www-form-urlencoded') {
        const body = await readFormData(event);
        
        const result: Record<string, unknown> = {};
        for (const dup of body) {
            result[dup[0]] = dup[1];
        }

        return result;
    } else {
        throw Error('')
    }
}
