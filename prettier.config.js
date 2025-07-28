/** @type {import("prettier").Config} */
export default {
  semi: true,                // Thêm dấu chấm phẩy cuối dòng
  singleQuote: true,         // Dùng dấu nháy đơn
  trailingComma: 'es5',      // Dấu phẩy ở cuối object, array (nếu hợp lệ)
  printWidth: 80,            // Giới hạn 80 ký tự mỗi dòng
  tabWidth: 2,               // Thụt lề 2 khoảng trắng
  bracketSpacing: true,      // { foo: bar } thay vì {foo:bar}
  arrowParens: 'always',     // (x) => x
  plugins: ['prettier-plugin-tailwindcss'], // Plugin sắp xếp class Tailwind
};
