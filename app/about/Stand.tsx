export default function Stand() {
  return (
    <div className="container">
      <div className="e-con-inner">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
            What We Stand For
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Principles
          </h2>
          <p className="text-gray-600">
            ArnoldAI is a white-label AI platform that allows businesses to
            build, scale, and sell compliant AI solutions under their own brand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-purple-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">AI Without Barriers</h3>
            <p className="text-gray-600">
              Compliance should enable innovation, not restrict it.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-purple-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Compliance by Design</h3>
            <p className="text-gray-600">
              AI should be transparent, secure, and aligned with industry
              regulations from day one.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-purple-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Speed and Scalability</h3>
            <p className="text-gray-600">
              AI adoption should be fast, efficient, and accessible for all
              businesses—not just tech giants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
