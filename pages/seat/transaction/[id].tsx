import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '@/components/NavBar';
import LoadingSpinner from '@/components/LoadingSpinner';

const Transaction: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState<boolean>(true);
  const [transactionData, setTransactionData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          // Ubah id menjadi string
          const transactionId = id.toString();

          // Misalnya, Anda memiliki fungsi untuk mengambil data transaksi berdasarkan id
          // Ganti fungsi ini dengan cara Anda mengambil data transaksi dari sumber data yang sesuai
          const data = await fetchTransactionData(transactionId);

          // Set data transaksi dan hentikan loading
          setTransactionData(data);
          setLoading(false);
        } catch (error) {
          // Tangani kesalahan jika pengambilan data gagal
          console.error('Error fetching transaction data:', error);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!transactionData) {
    return <div>Data transaksi tidak ditemukan.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Transaction Details</h1>
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <p><strong>Transaction ID:</strong> {transactionData.id}</p>
          <p><strong>Movie ID:</strong> {transactionData.movieId}</p>
          <p><strong>Cinema:</strong> {transactionData.cinemaName}</p>
          <p><strong>Showtime:</strong> {transactionData.showtime}</p>
          <p><strong>Date:</strong> {transactionData.date}</p>
          <p><strong>Selected Seats:</strong> {transactionData.selectedSeats.join(', ')}</p>
          <p><strong>Total Price:</strong> {transactionData.totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
