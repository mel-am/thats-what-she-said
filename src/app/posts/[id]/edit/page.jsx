import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SingleQuote({ params }) {
  const result = await sql`SELECT * FROM quotes WHERE id = ${params.id}`;
  const quote = result.rows[0];

  async function editQuote(formData) {
    "use server";
    const quote = formData.get("quote");
    const title = formData.get("title");
    const season = formData.get("season");
    const episode = formData.get("episode");
    const character = formData.get("character");
    await sql`UPDATE quotes SET title=${title}, season=${season}, episode=${episode}, character=${character} WHERE id = ${params.id}`;
 
    revalidatePath(`/posts/${params.id}`);

    redirect(`/posts/${params.id}`);
  }

  return (
    <div id="edit_form">
      <form action={editQuote}>
        <label>Quote</label>
        <input
          name="quote"
          placeholder="Enter quote here"
          defaultValue={quote.quote}
          rows={3}
        />

        <label htmlFor="episode">Episode</label>
        <select name="episode" id="episode">
          <option value="1">Pilot</option>
          <option value="2">Diversity Day</option>
          <option value="3">Health Care</option>
          <option value="4">The Alliance</option>
          <option value="5">Basketball</option>
          <option value="6">Hot Girl</option>
          <option value="7">The Dundies</option>
          <option value="8">Sexual Harassment</option>
          <option value="9">Office Olympics</option>
          <option value="10">The Fire</option>
          <option value="11">Halloween</option>
          <option value="12">The Fight</option>
          <option value="13">Christmas Party</option>
          <option value="14">Booze Cruise</option>
          <option value="15">The Injury</option>
          <option value="16">The Secret</option>
          <option value="17">The Carpet</option>
          <option value="18">Boys and Girls</option>
          <option value="19">Valentine&apos;s Day</option>
          <option value="20">Drug Testing</option>
          <option value="21">Casino Night</option>
          <option value="22">Gay Witch Hunt</option>
          <option value="23">The Convention</option>
          <option value="24">The Coup</option>
          <option value="25">Grief Counselling</option>
          <option value="26">Diwali</option>
          <option value="27">Branch Closing</option>
          <option value="28">The Merger</option>
          <option value="29">A Benihana Christmas</option>
          <option value="30">Back from Vacation</option>
          <option value="31">Travelling Salesmen</option>
          <option value="32">The Return</option>
          <option value="33">Ben Franklin</option>
          <option value="34">Product Recall</option>
          <option value="35">Beach Games</option>
          <option value="36">The Job</option>
          <option value="37">Fun Run</option>
          <option value="38">Dunder Mifflin Infinity</option>
          <option value="39">Launch Party</option>
          <option value="40">Money</option>
          <option value="41">Local Ad</option>
          <option value="42">Branch Wars</option>
          <option value="43">Survivor Man</option>
          <option value="44">The Deposition</option>
          <option value="45">Dinner Party</option>
          <option value="46">Chair Model</option>
          <option value="47">Job Fair</option>
          <option value="48">Goodbye Toby</option>
          <option value="49">Weight Loss</option>
          <option value="50">Business Ethics</option>
          <option value="51">Baby Shower</option>
          <option value="52">Crime Aid</option>
          <option value="53">Employee Transfer</option>
          <option value="54">Customer Survey</option>
          <option value="55">Business Trip</option>
          <option value="56">Frame Toby</option>
          <option value="57">The Surplus</option>
          <option value="58">Moroccan Christmas</option>
          <option value="59">The Duel</option>
          <option value="60">Prince Family Paper</option>
          <option value="70">Stress Relief</option>
          <option value="71">Lecture Circuit: Part 1</option>
          <option value="72">Lecture Circuit: Part 2</option>
          <option value="73">Blood Drive</option>
          <option value="74">Golden Ticket</option>
          <option value="75">New Boss</option>
          <option value="76">Two Weeks</option>
          <option value="77">Dream Team</option>
          <option value="78">Michael Scott Paper Company</option>
          <option value="79">Heavy Competition</option>
          <option value="80">Broke</option>
          <option value="81">Casual Friday</option>
          <option value="82">Cafe Disco</option>
          <option value="83">Company Picnic</option>
          <option value="84">Gossip</option>
          <option value="85">The Meeting</option>
          <option value="86">The Promotion</option>
          <option value="87">Niagara</option>
          <option value="88">Mafia</option>
          <option value="89">The Lover</option>
          <option value="90">Koi Pond</option>
          <option value="91">Double Date</option>
          <option value="92">Murder</option>
          <option value="93">Shareholder Meeting</option>
          <option value="94">Scott&apos;s Tots</option>
          <option value="95">Secret Santa</option>
          <option value="96">The Banker</option>
          <option value="97">Sabre</option>
          <option value="98">Manager and Salesman</option>
          <option value="99">The Delivery</option>
          <option value="100">St. Patrick&apos;s Day</option>
          <option value="101">New Leads</option>
          <option value="102">Happy Hour</option>
          <option value="103">Secretary&apos;s Day</option>
          <option value="104">Body Language</option>
          <option value="105">The Cover-Up</option>
          <option value="106">The Chump</option>
          <option value="107">Whistleblower</option>
          <option value="108">Nepotism</option>
          <option value="109">Counselling</option>
          <option value="110">Andy&apos;s Play</option>
          <option value="111">Sex Ed</option>
          <option value="112">The Sting</option>
          <option value="113">Costume Contest</option>
          <option value="114">Christening</option>
          <option value="115">Viewing Party</option>
          <option value="116">WUPHF.com</option>
          <option value="117">China</option>
          <option value="118">Classy Christmas</option>
          <option value="119">Ultimatum</option>
          <option value="120">The Seminar</option>
          <option value="121">The Search</option>
          <option value="122">PDA</option>
          <option value="123">Threat Level Midnight</option>
          <option value="124">Todd Packer</option>
          <option value="125">Garage Sale</option>
          <option value="126">Training Day</option>
          <option value="127">Michael&apos;s Last Dundies</option>
          <option value="128">Goodbye, Michael</option>
          <option value="129">The Inner Circle</option>
          <option value="130">Dwight K. Schrute, (Acting) Manager</option>
          <option value="131">Search Committee</option>
          <option value="132">The List</option>
          <option value="133">The Incentive</option>
          <option value="134">Lotto</option>
          <option value="135">Garden Party</option>
          <option value="136">Spooked</option>
          <option value="137">Doomsday</option>
          <option value="138">Pam&apos;s Replacement</option>
          <option value="139">Gettysburg</option>
          <option value="140">Mrs. California</option>
          <option value="141">Christmas Wishes</option>
          <option value="142">Trivia</option>
          <option value="143">Pool Party</option>
          <option value="144">Jury Duty</option>
          <option value="145">Special Project</option>
          <option value="146">Tallahassee</option>
          <option value="147">After Hours</option>
          <option value="148">Test the Store</option>
          <option value="149">Last Day in Florida</option>
          <option value="150">Get the Girl</option>
          <option value="151">Welcome Party</option>
          <option value="152">Angry Andy</option>
          <option value="153">Fundraiser</option>
          <option value="154">Turf War</option>
          <option value="155">Free Family Portrait Studio</option>
          <option value="156">New Guys</option>
          <option value="157">Roy&apos;s Wedding</option>
          <option value="158">Andy&apos;s Ancestry</option>
          <option value="159">Work Bus</option>
          <option value="160">Here Comes Treble</option>
          <option value="161">The Boat</option>
          <option value="162">The Whale</option>
          <option value="163">The Target</option>
          <option value="164">Dwight Christmas</option>
          <option value="165">Lice</option>
          <option value="166">Suit Warehouse</option>
          <option value="167">Customer Loyalty</option>
          <option value="168">Junior Salesman</option>
          <option value="169">Vandalism</option>
          <option value="170">Couples Discount</option>
          <option value="171">Moving On</option>
          <option value="172">The Farm</option>
          <option value="173">Promos</option>
          <option value="174">Stairmageddon</option>
          <option value="175">Paper Airplane</option>
          <option value="176">Livin&apos; the Dream</option>
          <option value="177">A.A.R.M.</option>
          <option value="178">Finale</option>
        </select>

        <label>Character</label>
        <select name="character" id="character" defaultValue={quote.character}>
          <option value="1">Michael Scott</option>
          <option value="2">Jim Halpert</option>
          <option value="3">Dwight Schrute</option>
          <option value="4">Pam Beesly</option>
          <option value="5">Angela Martin</option>
          <option value="6">Kevin Malone</option>
          <option value="7">Stanley Hudson</option>
          <option value="8">Phyllis Vance</option>
          <option value="9">Meredith Palmer</option>
          <option value="10">Creed Bratton</option>
          <option value="11">Oscar Martinez</option>
          <option value="12">Andy Bernard</option>
          <option value="13">Toby Flenderson</option>
          <option value="14">Kelly Kapoor</option>
          <option value="15">Ryan Howard</option>
          <option value="16">Erin Hannon</option>
          <option value="17">Darryl Philbin</option>
          <option value="18">Jan Levinson</option>
          <option value="19">Roy Anderson</option>
        </select>
        <button>Submit Changes</button>
      </form>
    </div>
  );
}
