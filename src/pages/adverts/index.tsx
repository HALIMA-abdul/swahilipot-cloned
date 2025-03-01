import Head from 'next/head';

export default function Adverts() {
  // This would typically come from your data file or CMS
  const adverts = [
    {
      title: "Tech Bootcamp Instructor",
      organization: "SwahiliPot Hub",
      deadline: "April 15, 2025",
      description: "We're looking for experienced instructors to lead our upcoming coding bootcamps. If you have expertise in web development, mobile app development, or data science, we want to hear from you!",
      link: "#"
    },
    {
      title: "Call for Artists - Cultural Exhibition",
      organization: "SwahiliPot Hub Arts Department",
      deadline: "May 1, 2025",
      description: "Calling all local artists! Submit your work for our upcoming cultural exhibition celebrating East African heritage. All mediums welcome.",
      link: "#"
    },
    {
      title: "Volunteer Mentors Needed",
      organization: "Swahili Tech Women",
      deadline: "Ongoing",
      description: "Share your expertise and inspire the next generation of women in technology. We're seeking volunteer mentors for our Swahili Tech Women program.",
      link: "#"
    }
  ];

  return (
    <>
      <Head>
        <title>Adverts - SwahiliPot Hub</title>
        <meta name="description" content="Opportunities, announcements, and calls for participation from SwahiliPot Hub." />
      </Head>
      
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Adverts & Opportunities
            </h1>
            <p className="text-xl mb-8">
              Discover opportunities to work with us, participate in our programs, or contribute to our community.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-light dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {adverts.map((advert, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{advert.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300">{advert.organization}</p>
                    </div>
                    <div className="bg-light dark:bg-gray-600 px-3 py-1 rounded-full text-sm">
                      Deadline: {advert.deadline}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {advert.description}
                  </p>
                  
                  <a 
                    href={advert.link} 
                    className="btn inline-block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Submit an Advert</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you'd like to post an opportunity or announcement on our platform, please fill out the form below. All submissions will be reviewed before publishing.
            </p>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Advert Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Organization *</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Contact Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="deadline" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Deadline</label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn">
                Submit Advert
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Adverts - SwahiliPot Hub",
      description: "Opportunities, announcements, and calls for participation from SwahiliPot Hub."
    }
  };
}