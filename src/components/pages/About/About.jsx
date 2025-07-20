import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from '../../utils/Container';

const About = () => {
  const [users, setUsers] = useState([]); // User data রাখার state
  const [error, setError] = useState(null); // Error message রাখার জন্য নতুন state
  const [loading, setLoading] = useState(true); // Optional: Loading indicator

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true); // API call শুরু হলে loading true
        const response = await axios.get(apiUrl);
        setUsers(response.data); // ডেটা পাওয়া গেলে সেট করি
        setError(null); // আগের কোনো error থাকলে clear করে দেই
      } catch (err) {
        setError('দুঃখিত! ইউজার তথ্য আনতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।');
        setUsers([]); // আগের user data থাকলে clear করি
      } finally {
        setLoading(false); // শেষ হলে loading false
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="py-10 bg-gray-100 min-h-screen">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-10 text-purple-800">
          User List
        </h1>

        {/* ✅ যদি loading হয় */}
        {loading && (
          <p className="text-center text-gray-600 text-lg">তথ্য লোড হচ্ছে...</p>
        )}

        {/* ❌ যদি error হয় */}
        {error && (
          <div className="text-center bg-red-100 text-red-700 p-4 rounded-lg mb-6 max-w-xl mx-auto shadow">
            {error}
          </div>
        )}

        {/* ✅ যদি data পাওয়া যায় */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map(user => (
              <div
                key={user.id}
                className="bg-white rounded-xl shadow-md p-6 border border-purple-200 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-semibold text-purple-700 mb-2">
                  {user.name}
                </h2>
                <p className="text-gray-600">
                  <span className="font-bold">Username:</span> {user.username}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Email:</span> {user.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Phone:</span> {user.phone}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Website:</span> {user.website}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Company:</span>{' '}
                  {user.company?.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default About;
