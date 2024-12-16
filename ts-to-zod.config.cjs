/**
 * ts-to-zod configuration.
 *
 * @type {import('ts-to-zod').TsToZodConfig}
 */
module.exports = [
  {
    name: '',
    input: './typing/server-type.ts',
    output: './typing/server-type.zod.ts',
  },
  {
    name: '',
    input: './typing/database-type.ts',
    output: './typing/database-type.zod.ts',
  },
];
