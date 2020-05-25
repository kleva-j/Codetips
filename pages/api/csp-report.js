// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { header, body, params, query } = req;
  console.log([header, body, query, params]);
}
