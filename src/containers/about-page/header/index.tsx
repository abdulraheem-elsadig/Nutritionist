import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section>
      <div className="relative w-full h-auto  aspect-[3/1]">
        <Image src="/images/logo-cover.png" alt="logo" fill />
      </div>
      <div className="bg-lime-50 border border-lime-300 rounded-md p-8 mt-12 text-center">
        <h3 className="font-semibold text-2xl mb-5">Welcome to Nutritionist</h3>
        <p className="text-sm font-medium">
          Your trusted source for personalized nutrition coaching. Our mission
          is to help you achieve your weight loss and health goals through
          tailored nutrition plans and expert guidance. We understand that every
          individual is unique, and that&quot;s why we believe in providing
          personalized solutions that fit your lifestyle and preferences. With
          our team of qualified nutritionists and dietitians, we are dedicated
          to empowering you with the knowledge and tools you need to make
          lasting changes. Whether you want to shed those extra pounds, improve
          your overall well-being, or develop a healthier relationship with
          food, we are here to support you every step of the way. At
          Nutritionist, we believe that healthy eating should be enjoyable and
          sustainable. We emphasize the importance of balanced nutrition,
          focusing on whole foods and mindful eating practices. Our approach is
          rooted in scientific research and evidence-based strategies, ensuring
          that you receive the most up-to-date and accurate information. Join
          our community of individuals committed to transforming their lives
          through nutrition. Take control of your health, boost your energy
          levels, and discover the joy of nourishing your body with wholesome
          foods. We are here to guide you towards a healthier, happier you.
        </p>
      </div>
    </section>
  );
};

export default Header;
