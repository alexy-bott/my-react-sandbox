import { useEffect, useState } from "react";
// useSelector, selectSiteVersion и requestGame берутся из исходного приложения.
export const Game = ({ gameId }) => {
  const siteVersion = useSelector(selectSiteVersion); // 'mobile' | 'desktop'
  const [isLoading, setIsLoading] = useState(false);
  // В данном JSX fullscreen нигде не читается: подписка лишь вызывала лишние рендеры.
  const [game, setGame] = useState({ title: '', description: '' });
  useEffect(() => {
    let current = true;
    // Хук вызывается при каждом рендере; ограничение mobile относится к самому запросу.
    setGame({ title: '', description: '' });
    if (!gameId || siteVersion !== 'mobile') { setIsLoading(false); return; }
    setIsLoading(true);
    async function loadGame() {
      try {
        const result = await requestGame({ id: gameId, mode: 'real', platform: siteVersion });
        if (current) setGame(result);
      } catch (reason) {
        if (current) console.error(reason);
      } finally {
        if (current) setIsLoading(false);
      }
    }
    loadGame();
    return () => { current = false; };
  }, [gameId, siteVersion]);
  if (!gameId) return <div>Empty</div>;
  return <div>
    <div>{game.title}</div><div>{game.description}</div>
    {isLoading && <div>Loading...</div>}
  </div>;
};
