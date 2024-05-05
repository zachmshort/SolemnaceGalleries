import dynamic from "next/dynamic";
import EmptyState from "@/components/EmptyState";
// import { currentUser } from "@/lib/auth";
import ClientOnly from "@/components/ClientOnly";
import getfigurinesApi from "@/actions/getFigurines";

interface ShopProps {
  userId?: string;
  searchParams?: {
    q?: string;

    page?: string;
  };
}

const DynamicShop = dynamic(() => import("@/app/figurine/figurine"), {
  ssr: true,
});

const ShopPage = async ({
  searchParams,
}: {
  searchParams?: ShopProps["searchParams"];
}) => {
  const { q = "" } = searchParams || {};
  let page = parseInt(searchParams?.page as string, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 20;

  const { figurines, totalItems } = await getfigurinesApi(
    {
      q,
    },
    page,
    perPage
  );
  //   let user = await getUserwithCart();
  const totalPages = Math.ceil(totalItems / perPage);
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const isPageOutOfRange = page > totalPages;

  const pageNumbers = [];
  const offsetNumber = 1003;

  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  return (
    <DynamicShop
      figurines={figurines}
      //   user={user}
      emptyState={
        figurines.length === 0 ? (
          <ClientOnly>
            <EmptyState showReset />
          </ClientOnly>
        ) : null
      }
      totalPages={totalPages}
      prevPage={prevPage}
      nextPage={nextPage}
      isPageOutOfRange={isPageOutOfRange}
      pageNumbers={pageNumbers}
      currentPage={page}
    />
  );
};

export default ShopPage;
