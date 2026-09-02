type User = {
  id: string;
  name: string;
};

type Props = {
  initialQuery?: string;
  onSelect: (user: User) => void;
};

export function UserSearch({
  initialQuery = '',
  onSelect,
}: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(true);

      const response = await fetch(`/api/users?q=${query}`);
      const data = await response.json();

      setUsers(data);
      setLoading(false);
    }, 300);
  }, [query]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="search">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      {users.map((user, index) => (
        <div key={index} onClick={() => onSelect(user)}>
          {user.name}
        </div>
      ))}
    </div>
  );
}
