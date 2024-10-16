import { FaLink } from "react-icons/fa6";
import { useState } from "react";

const Links = () => {
  const [links, setLinks] = useState([{ platform: "github", url: "" }]);

  const handleLinkChange = (e, index) => {
    const { name, value } = e.target;
    const newLinks = [...links];
    newLinks[index][name] = value;
    setLinks(newLinks);
  };

  const addNewLink = () => {
    setLinks([...links, { platform: "github", url: "" }]);
  };

  const removeLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(links);
  };

  return (
    <div className="flex flex-col gap-y-3 w-full">
      <p className="text-2xl font-bold text-center md:text-left text-black/70 mt-10">
        Customize your links
      </p>
      <p className="text-center md:text-left text-xs text-black/50">
        Add/edit/remove links below and then share all your profiles with the
        world
      </p>
      <button
        className="w-full text-center px-5 py-2 text-[#614BC8]/75 border border-[#614BC8] shadow-md rounded-lg text-xl duration-700 font-bold mt-5 mb-5"
        onClick={addNewLink}
      >
        + Add new link
      </button>

      {/* Link Part */}
      <div className="flex flex-col gap-y-10">
        {links.map((item, index) => (
          <div key={index} className="py-5 px-2 bg-white rounded-lg">
            <div className="flex items-center justify-between">
              <p className="px-1 font-bold text-black/50">Link #{index + 1}</p>
              <p
                className="px-2 text-black/50 cursor-pointer"
                onClick={() => removeLink(index)}
              >
                Remove
              </p>
            </div>
            <p className="text-xs text-black/50 text-left py-1 px-1">
              Platform
            </p>
            <div className="rounded-full">
              <select
                name="platform"
                value={item.platform}
                onChange={(e) => handleLinkChange(e, index)}
                className="w-full text-black/50 border-black/5 border shadow-sm rounded-lg px-5 py-2 outline-none"
              >
                <option value="github">Github</option>
                <option value="youtube">YouTube</option>
                <option value="linkedin">LinkedIn</option>
              </select>
            </div>
            <p className="text-xs text-black/50 text-left py-1 px-1 mt-3">
              Link
            </p>
            <p className="flex items-center justify-start py-2 px-3 border border-black/5 shadow-sm rounded-lg w-full gap-x-3">
              <FaLink className={"text-black/50"} />
              <input
                type="text"
                name="url"
                value={item.url}
                onChange={(e) => handleLinkChange(e, index)}
                placeholder="Link"
                className="px-3 w-full h-full outline-none text-black/50"
              />
            </p>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <hr className="w-full text-black/30 shadow-sm mt-10" />
      <div className="flex items-center justify-center md:justify-end px-3 mt-5">
        <button
          className="px-8 py-2 text-white bg-[#614BC8] border border-[#614BC8] rounded-lg"
          type="submit"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Links;
