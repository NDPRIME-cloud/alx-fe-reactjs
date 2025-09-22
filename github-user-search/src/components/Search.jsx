import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [form, setForm] = useState({
    username: "",
    location: "",
    repos: "",
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const data = await searchUsers(form);
      setResults(data.items);
    } catch (err) {
      setError("No users found. Try different criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        GitHub User Search
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-3"
      >
        <input
          type="text"
          name="username"
          placeholder="Search by username..."
          value={form.username}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />

        <input
          type="text"
          name="location"
          placeholder="Filter by location..."
          value={form.location}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />

        <input
          type="number"
          name="repos"
          placeholder="Min repositories..."
          value={form.repos}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded py-2 hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid gap-4 mt-4">
          {results.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
