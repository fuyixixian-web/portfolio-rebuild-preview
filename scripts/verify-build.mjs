import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const requiredSnippets = [
  '谢幺幺虚拟 IP 双账号内容矩阵',
  'const accountsData = [',
  'assets/accounts/xie-yaoyao-love-dance-douyin.jpeg',
  'assets/accounts/xie-yaoyao-love-dance-xiaohongshu.jpeg',
  'assets/accounts/xie-yaoyao-thanks-douyin.jpeg',
  'assets/accounts/xie-yaoyao-thanks-xiaohongshu.jpeg'
];

for (const snippet of requiredSnippets) {
  if (!html.includes(snippet)) throw new Error(`Missing required page content: ${snippet}`);
}

for (const asset of [
  '../assets/accounts/xie-yaoyao-love-dance-douyin.jpeg',
  '../assets/accounts/xie-yaoyao-love-dance-xiaohongshu.jpeg',
  '../assets/accounts/xie-yaoyao-thanks-douyin.jpeg',
  '../assets/accounts/xie-yaoyao-thanks-xiaohongshu.jpeg'
]) {
  await access(new URL(asset, import.meta.url), constants.R_OK);
}

console.log('Static portfolio build check passed.');
