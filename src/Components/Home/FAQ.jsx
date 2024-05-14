import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="bg-base-200 mt-5 mb-5 ">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is the purpose of the online group study assignment?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The purpose of the online group study assignment is to foster
                  collaboration among students, enhance understanding of course
                  materials, and provide an opportunity for peer learning and
                  support.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How are groups assigned?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Groups may be assigned randomly by the instructor or based on
                  specific criteria such as class section, academic interests,
                  or availability.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do I communicate with my group members?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Communication with group members can be facilitated through
                  various online platforms such as email, messaging apps, or
                  dedicated group discussion forums on the course website.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What are the expectations for participation?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Each group member is expected to actively engage in
                  discussions, contribute ideas, and collaborate on assignments.
                  Regular attendance and timely completion of tasks are
                  essential for the success of the group.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How should conflicts or disagreements within the group be
                resolved?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Conflicts or disagreements should be addressed openly and
                  respectfully within the group. If necessary, the group can
                  seek assistance from the instructor or teaching assistant to
                  mediate and resolve the issue. <br /> Group assignments may be
                  evaluated based on various criteria such as the quality of the
                  work produced, individual contributions, and overall group
                  collaboration. Specific grading rubrics or guidelines will be
                  provided by the instructor.{" "}
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
