import React from 'react';

export default function page() {
    return (
        <div>
            {/* Contact Section */}
            <section className="py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-purple-900 mb-8">Get in Touch</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Contact us today for a consultation on migration, business registration, or visa services.
                    </p>
                    <button className="bg-purple-700 text-white py-3 px-6 rounded-lg hover:bg-purple-600">
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
}
