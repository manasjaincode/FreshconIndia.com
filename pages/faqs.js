import CollapsibleComponent from "@/components/FAQComponent/CollapsibleComponent";
import Footer from "@/components/GeneralComponents/Footer";
import Header from "@/components/GeneralComponents/Header";
import React, { useState } from "react";

export default function FaqPage() {
  const [collapsible, setCollapsible] = useState([
    {
      title: "How much is the quantity per pack?",
      content: (
        <>
          250 g per pack 
        </>
      ),
      show: true,
    },
    {
      title: "Do you need to store the products in refrigerator?",
      content: (
        <>
          No refrigeration is need for unopened pack; it can be stored at room temperature.
        </>
      ),
      show: false,
    },
    {
      title: "What is the shelf life of products?",
      content: (
        <>
          Shelf life is 1 year.
        </>
      ),
      show: false,
    },
    {
      title: "Is it safe to consume considering 1-year shelf life?",
      content: (
        <>
          Yes, the products are safe to consume.
        </>
      ),
      show: false,
    },
    {
      title: "Do these products contain preservatives?",
      content: (
        <>
          No, the product does not contain any preservatives.
        </>
      ),
      show: false,
    },
    {
      title: "How can the cooked product be stable without preservative?",
      content: (
        <>
           The products are manufactured using Hydrothermal technology which makes them shelf stable without the use of any preservatives.
        </>
      ),
      show: false,
    },
    {
      title: "Do u need to refrigerate the products after opening the pack?",
      content: (
        <>
          Yes, products need to be stored in refrigerator post opening the pack.
        </>
      ),
      show: false,
    },
    {
      title: "How many days you can keep the opened pack in refrigerator?",
      content: (
        <>
          The product can be stored for 48 hours in refrigerator
        </>
      ),
      show: false,
    },
    {
      title: "Is it half cooked or completely cooked / do we need to cook it further before using?",
      content: (
        <>
          The products are just like home cooked. It does not require any extra cooking and can be used as they are after opening the pack.
        </>
      ),
      show: false,
    },
    {
      title: "What are the various usages of these products?",
      content: (
        <>
         They can be used to make salads, individual dishes like chole, rajma, chana in gravy, spreads, snacks, etc.
        </>
      ),
      show: false,
    },
    {
      title: "What makes Frozen Shredded Coconut unique?",
      content: (
        <>
          Our Frozen Shredded Coconut stands out for its exceptional qualities.
          It is 100% natural, hygienically produced, and contains no
          preservatives. With consistent quality throughout the year and a
          longer shelf life, it offers convenience without compromising on
          freshness or nutrition.
        </>
      ),
      show: false,
    },
    {
      title:
        "How does freezing the coconut maintain its freshness and nutrition?",
      content: (
        <>
          Freezing is a natural preservation method that helps retain the
          freshness and nutritional value of our Shredded Coconut. By locking in
          the natural goodness, freezing ensures that each pack of our product
          delivers the same vibrant taste and nutritional benefits as fresh
          coconut.
        </>
      ),
      show: false,
    },
    {
      title: "In what dishes can I use Frozen Shredded Coconut?",
      content: (
        <>
          Our versatile Frozen Shredded Coconut can be used in various sweet and
          savoury dishes. It adds a delightful tropical touch to desserts like
          cakes, pies, and smoothies. Additionally, it enhances the flavour of
          savoury dishes such as curries, stir-fries, and salads, offering a
          unique and authentic taste experience.
        </>
      ),
      show: false,
    },
    {
      title: "Are any preservatives used in the Frozen Shredded Coconut?",
      content: (
        <>
          No, we do not use any preservatives in our Frozen Shredded Coconut. We
          believe in offering our customers a pure and natural product, free
          from unwanted additives. The freezing process itself acts as a
          preservative, allowing you to enjoy the coconut&apos;s natural
          flavours and texture.
        </>
      ),
      show: false,
    },
    
  ]);

  const changeCollapsible = (i) => {
    let tempCollapsible = [...collapsible];
    collapsible.forEach((item, index) => {
      if (index !== i) {
        tempCollapsible[index].show = false;
      }
    });
    tempCollapsible[i].show = !collapsible[i].show;
    setCollapsible([...tempCollapsible]);
  };

  return (
    <div>
      <Header />

      <div
        className="flex justify-center py-32 relative w-full bg-no-repeat h-[450px] bg-cover bg-bottom"
        style={{ backgroundImage: "url('https://cl85-next.s3.ap-south-1.amazonaws.com/faq/faqs-bg.svg')" }}>
        <h1 className="text-white font-semibold absolute uppercase text-4xl">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="w-full relative mx-auto -mt-44 space-y-2 pb-20">
        {" "}
        {/* Added pb-20 for padding-bottom */}
        {collapsible && collapsible.length > 0
          ? collapsible.map((colItem, index) => (
              <CollapsibleComponent
                key={`collapse-${index}`}
                show={colItem.show}
                title={colItem.title}
                content={colItem.content}
                toggleClick={() => changeCollapsible(index)}
              />
            ))
          : null}
      </div> 
      <Footer/>
    </div>
  );
}
