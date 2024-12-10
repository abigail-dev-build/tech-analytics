import Layout from "../components/layout"
import HeadTag from "../components/headTag";

const Journey = () => {
    return (
        <Layout>
            <HeadTag title="Our journey" />
            <div class="grid grid-cols-3">
                <div class="bg-sky">1</div>
                <div class="col-span-2 mx-28 pt-20">
                    <p class="font-semibold text-2xl">WE BELIEVE THAT <span class="text-blue">EVERY BUSINESS</span>, regardless of size, deserves access to enterprise-grade technology solutions. Our journey has been marked by countless hours spent understanding each client&apos;s unique challenges, whether it&apos;s a startup seeking cloud infrastructure guidance or an established company ready for digital transformation.</p>
                </div>
            </div>
            </Layout>
    )
}
export default Journey;