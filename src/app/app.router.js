import { Router } from 'express';
// import async from 'async';

// const awaitData = callback => {
//   async.series(
//     [
//       done1 => setTimeout(done1, Math.random() * 1000),
//       done1 =>
//         async.parallel(
//           [
//             done2 => setTimeout(done2, Math.random() * 1000),
//             done2 => setTimeout(done2, Math.random() * 1000),
//             done2 => setTimeout(done2, Math.random() * 1000),
//             done2 => setTimeout(done2, Math.random() * 1000),
//             done2 => setTimeout(done2, Math.random() * 1000),
//           ],
//           done1,
//         ),
//     ],
//     callback,
//   );
// };

export const appRouter = Router();

appRouter.get('/', async (_req, res) => {
  // await awaitData();
  // for (let i = 0; i < 10_00_000; i += 1) {
  //   i -= 1;
  //   i += 1;
  // }
  res.json({
    message: 'Hello, world!',
  });
});
