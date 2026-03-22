'use client';

import { deleteContactApi, getContacts } from './../../../lib/api.js';
import { 
  Search, 
  Filter,
  Mail,
  Phone,
  Clock,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Trash2
} from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

// type Contact = {
//   id: number;
//   name: string;
//   email: string;
//   phone?: string;
//   subject: string;
//   message: string;
//   created_at?: string;
//   createdAt?: string;
//   status?: string;
// };

export default function ContactPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // const [contacts, setContacts] = useState<Contact>([]);
  const [contacts, setContacts] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 10;

  useEffect(() => {
    fetchContacts();
  }, []);
  
  const fetchContacts = async () => {
    try {
      setLoading(true);
  
      const token = localStorage.getItem("adminToken");
      const res = await getContacts(token);
  
      const data = res?.data?.data || res?.data || [];
      setContacts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading contacts...</div>;
  }

  const formatDateTime = (contact) => {
    const dateValue = contact.created_at || contact.createdAt;
    if (!dateValue) return "—";
    return new Date(dateValue);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");
  
      if (!confirm("Delete this contact message?")) return;
  
      await deleteContactApi(id, token);
      toast.success("Contact deleted successfully");
  
      // refresh list
      fetchContacts();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const totalPages = Math.max(1, Math.ceil(contacts.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentContacts = contacts.slice(startIndex, endIndex);

  // const getStatusBadgeColor = (status: string) => {
  //   switch (status) {
  //     case 'New':
  //       return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
  //     case 'In Progress':
  //       return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
  //     case 'Replied':
  //       return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
  //     default:
  //       return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400';
  //   }
  // };

  return (
    <div className="space-y-6 ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact Messages</h1>
          <p className="text-gray-600 dark:text-gray-400">View and manage contact form submissions</p>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Messages</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{contacts.length}</p>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">New</p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {contacts.filter(c => c.status === 'New').length}
          </p>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">In Progress</p>
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {contacts.filter(c => c.status === 'In Progress').length}
          </p>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Replied</p>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">
            {contacts.filter(c => c.status === 'Replied').length}
          </p>
        </div>
      </div> */}

      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Message
                </th>
                {/* <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th> */}
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Date/Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {currentContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                        {contact.name
                            ?.split(' ')
                            .map((n) => n.charAt(0))
                            .join('')
                            .toUpperCase() || '?'}

                        </span>
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {contact.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <Mail className="w-3 h-3" />
                        {contact.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <Phone className="w-3 h-3" />
                        {contact.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white max-w-xs truncate">
                      {contact.subject}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md truncate">
                      {contact.message}
                    </p>
                  </td>
                  {/* <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(contact.status)}`}>
                      {contact.status}
                    </span>
                  </td> */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Clock className="w-3 h-3" />
                    <div>
                      {(() => {
                        const dateValue = contact.created_at || contact.createdAt;
                        const date = dateValue ? new Date(dateValue) : null;

                        return date ? (
                          <>
                            <p>{date.toLocaleDateString()}</p>
                            <p className="text-gray-500 dark:text-gray-500">
                              {date.toLocaleTimeString()}
                            </p>
                          </>
                        ) : (
                          <p>—</p>
                        );
                      })()}
                    </div>
                  </div>
                </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {/* <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors group" title="View">
                        <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                      </button> */}
                      <button
                      onClick={() => {
                        setSelectedContact(contact);
                        setIsModalOpen(true);
                      }}
                      className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors group"
                      title="View"
                    >
                      <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    </button>
                      {/* <button className="p-2 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors group" title="Mark as Replied">
                        <Check className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
                      </button> */}
                      <button  onClick={() => handleDelete(contact.id)} className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors group" title="Delete">
                        <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {startIndex + 1} to {Math.min(endIndex, contacts.length)} of {contacts.length} messages
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>


      {isModalOpen && selectedContact && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-4">
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-2xl p-6 relative">
      
      {/* Close Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Contact Details
      </h2>

      <div className="space-y-4 text-sm">

        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-300">Name</p>
          <p className="text-gray-600 dark:text-gray-400">
            {selectedContact.name}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-300">Email</p>
          <p className="text-gray-600 dark:text-gray-400">
            {selectedContact.email}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-300">Phone</p>
          <p className="text-gray-600 dark:text-gray-400">
            {selectedContact.phone || "—"}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-300">Subject</p>
          <p className="text-gray-600 dark:text-gray-400">
            {selectedContact.subject}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-300">Message</p>
          <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
            {selectedContact.message}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-300">Date</p>
          <p className="text-gray-600 dark:text-gray-400">
            {selectedContact.created_at
              ? new Date(selectedContact.created_at).toLocaleString()
              : "—"}
          </p>
        </div>

      </div>
    </div>
  </div>
)}

    </div>
  );
}