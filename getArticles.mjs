// import fs from 'node:fs/promises';
// import matter from 'gray-matter';
// import removeMd from 'remove-markdown';

// const articles = await fs.readdir('./docs/articles');

// const data = await Promise.all(
//   articles.map(async (article) => {
//     const file = matter.read(`./docs/articles/${article}`, {
//       excerpt: true,
//       excerpt_separator: '<!-- more -->',
//     });

//     const { data, excerpt, path } = file;
//     const contents = removeMd(excerpt)
//       .trim()
//       .split(/\r\n|\n|\r/);

//     return {
//       ...data,
//       title: contents[0].replace(/\s{2,}/g, '').trim(),
//       path: path.replace('./docs/', '').replace(/\.md$/, '.html'),
//       excerpt: contents
//         .slice(1)
//         .join('')
//         .replace(/\s{2,}/g, '')
//         .trim(),
//     };
//   })
// );

// await fs.writeFile('./data.json', JSON.stringify(data), 'utf-8');