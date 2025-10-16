# My Redux App (Vite + React + Redux Toolkit)

## Опис
Додаток демонструє:
- глобальний стан `users` та `theme` у Redux (RTK slices),
- використання `useSelector` та `useDispatch`,
- вкладену структуру компонентів (LevelOne → LevelTwo → UserList → UserProfile).

## Асинхронні дії (fetch users)

До проекту додано асинхронні дії через Redux Toolkit:
- `src/redux/asyncActions/fetchUsers.js` - приклад `createAsyncThunk`, який завантажує користувачів з `jsonplaceholder`.
- `src/redux/slices/usersSlice.js` - обробляє стани `pending | fulfilled | rejected` і зберігає `status`/`error`.

## Встановлення
```bash
npm install
npm install @reduxjs/toolkit react-redux
npm run dev