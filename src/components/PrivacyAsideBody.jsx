const PrivacyAsideBody = ({ linkBody, subText, spanText }) => {
  return (
    <section className="w-full max-w-[750px] ml-2 sm:ml-20 text-[#667085]">
      {subText && (
        <h2 className=" leading-8 mb-4 tracking-wide text-sm">
          <b>{spanText}</b>
          {subText}
        </h2>
      )}
      {linkBody.map((link) => {
        const { id, text, infoList, listArray } = link;
        return (
          <div key={id} id={id}>
            <h2 className=" !text-[20px] uppercase  pb-4">{text}</h2>
            <ul className="!list-none text-left md:text-justify pb-10 text-[14px] tracking-wider">
              {infoList.map((list, index) => {
                return (
                  <li key={index} className="pb-4">
                    {list}
                  </li>
                );
              })}

              <ul className=" pl-4">
                {listArray &&
                  listArray.map((arr, index) => {
                    const { topic, topicText } = arr;
                    return (
                      <li key={index} className="my-2 ml-1 !list-disc pl-2">
                        <b className="mr-1">{topic}:</b>
                        <span className="">{topicText}</span>
                      </li>
                    );
                  })}
              </ul>
            </ul>
          </div>
        );
      })}
    </section>
  );
};
export default PrivacyAsideBody;
