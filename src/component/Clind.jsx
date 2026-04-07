import { useState } from 'react';

// Child component — নিজে কিছু জানে না, parent যা বলে তাই করে
function Panel({ title, children, isActive, onShow }) {
  return (
    <section style={{ border: '1px solid gray', margin: '8px', padding: '8px' }}>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  );
}

// Parent component — সব state এখানে, সব control এখানে
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h2>শহরের তথ্য</h2>
      <Panel
        title="ঢাকা"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        ঢাকা বাংলাদেশের রাজধানী এবং সবচেয়ে বড় শহর।
      </Panel>
      <Panel
        title="চট্টগ্রাম"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        চট্টগ্রাম বাংলাদেশের দ্বিতীয় বৃহত্তম শহর এবং প্রধান সমুদ্রবন্দর।
      </Panel>
    </div>
  );
}