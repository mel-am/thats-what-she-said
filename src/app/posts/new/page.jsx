import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddQuote() {
  async function handleAddQuote(formData) {
    "use server";

    const quote = formData.get("quote");
    const title = formData.get("title");
    const season = formData.get("season");
    const episode = formData.get("episode");
    const character = formData.get("character");

    await sql`INSERT INTO quotes (quote, title, season, episode, character) values (${quote}, ${title}, ${season}, ${episode}, ${character})`;

    revalidatePath("/");

    redirect("/");
  }

  return (
    <div className="add-quote-container">
      <h2>Add Quote</h2>
      <form action={handleAddQuote}>
        <label htmlFor="quote">Quote</label>
        <input name="quote" id="quote" placeholder="Quote" />
        <label htmlFor="episode">Episode</label>
        <select name="episode" id="episode">
          <option value="Pilot">Pilot</option>
          <option value="Diversity Day">Diversity Day</option>
          <option value="Health Care">Health Care</option>
          <option value="The Alliance">The Alliance</option>
          <option value="Basketball">Basketball</option>
          <option value="Hot Girl">Hot Girl</option>
          <option value="The Dundies">The Dundies</option>
          <option value="Sexual Harassment">Sexual Harassment</option>
          <option value="Office Olympics">Office Olympics</option>
          <option value="The Fire">The Fire</option>
          <option value="Halloween">Halloween</option>
          <option value="The Fight">The Fight</option>
          <option value="Christmas Party">Christmas Party</option>
          <option value="Booze Cruise">Booze Cruise</option>
          <option value="The Injury">The Injury</option>
          <option value="The Secret">The Secret</option>
          <option value="The Carpet">The Carpet</option>
          <option value="Boys and Girls">Boys and Girls</option>
          <option value="Valentine's Day">Valentine's Day</option>
          <option value="Drug Testing">Drug Testing</option>
          <option value="Casino Night">Casino Night</option>
          <option value="Gay Witch Hunt">Gay Witch Hunt</option>
          <option value="The Convention">The Convention</option>
          <option value="The Coup">The Coup</option>
          <option value="Grief Counseling">Grief Counseling</option>
          <option value="Diwali">Diwali</option>
          <option value="Branch Closing">Branch Closing</option>
          <option value="The Merger">The Merger</option>
          <option value="A Benihana Christmas">A Benihana Christmas</option>
          <option value="Back from Vacation">Back from Vacation</option>
          <option value="Traveling Salesmen">Traveling Salesmen</option>
          <option value="The Return">The Return</option>
          <option value="Ben Franklin">Ben Franklin</option>
          <option value="Product Recall">Product Recall</option>
          <option value="Beach Games">Beach Games</option>
          <option value="The Job">The Job</option>
          <option value="Fun Run">Fun Run</option>
          <option value="Dunder Mifflin Infinity">
            Dunder Mifflin Infinity
          </option>
          <option value="Launch Party">Launch Party</option>
          <option value="Money">Money</option>
          <option value="Local Ad">Local Ad</option>
          <option value="Branch Wars">Branch Wars</option>
          <option value="Survivor Man">Survivor Man</option>
          <option value="The Deposition">The Deposition</option>
          <option value="Dinner Party">Dinner Party</option>
          <option value="Chair Model">Chair Model</option>
          <option value="Job Fair">Job Fair</option>
          <option value="Goodbye Toby">Goodbye Toby</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Business Ethics">Business Ethics</option>
          <option value="Baby Shower">Baby Shower</option>
          <option value="Crime Aid">Crime Aid</option>
          <option value="Employee Transfer">Employee Transfer</option>
          <option value="Customer Survey">Customer Survey</option>
          <option value="Business Trip">Business Trip</option>
          <option value="Frame Toby">Frame Toby</option>
          <option value="The Surplus">The Surplus</option>
          <option value="Moroccan Christmas">Moroccan Christmas</option>
          <option value="The Duel">The Duel</option>
          <option value="Prince Family Paper">Prince Family Paper</option>
          <option value="Stress Relief">Stress Relief</option>
          <option value="Lecture Circuit: Part 1">
            Lecture Circuit: Part 1
          </option>
          <option value="Lecture Circuit: Part 2">
            Lecture Circuit: Part 2
          </option>
          <option value="Blood Drive">Blood Drive</option>
          <option value="Golden Ticket">Golden Ticket</option>
          <option value="New Boss">New Boss</option>
          <option value="Two Weeks">Two Weeks</option>
          <option value="Dream Team">Dream Team</option>
          <option value="Michael Scott Paper Company">
            Michael Scott Paper Company
          </option>
          <option value="Heavy Competition">Heavy Competition</option>
          <option value="Broke">Broke</option>
          <option value="Casual Friday">Casual Friday</option>
          <option value="Cafe Disco">Cafe Disco</option>
          <option value="Company Picnic">Company Picnic</option>
          <option value="Gossip">Gossip</option>
          <option value="The Meeting">The Meeting</option>
          <option value="The Promotion">The Promotion</option>
          <option value="Niagara">Niagara</option>
          <option value="Mafia">Mafia</option>
          <option value="The Lover">The Lover</option>
          <option value="Koi Pond">Koi Pond</option>
          <option value="Double Date">Double Date</option>
          <option value="Murder">Murder</option>
          <option value="Shareholder Meeting">Shareholder Meeting</option>
          <option value="Scott's Tots">Scott's Tots</option>
          <option value="Secret Santa">Secret Santa</option>
          <option value="The Banker">The Banker</option>
          <option value="Sabre">Sabre</option>
          <option value="Manager and Salesman">Manager and Salesman</option>
          <option value="The Delivery">The Delivery</option>
          <option value="St. Patrick's Day">St. Patrick's Day</option>
          <option value="New Leads">New Leads</option>
          <option value="Happy Hour">Happy Hour</option>
          <option value="Secretary's Day">Secretary's Day</option>
          <option value="Body Language">Body Language</option>
          <option value="The Cover-Up">The Cover-Up</option>
          <option value="The Chump">The Chump</option>
          <option value="Whistleblower">Whistleblower</option>
          <option value="Nepotism">Nepotism</option>
          <option value="Counselling">Counselling</option>
          <option value="Andy's Play">Andy's Play</option>
          <option value="Sex Ed">Sex Ed</option>
          <option value="The Sting">The Sting</option>
          <option value="Costume Contest">Costume Contest</option>
          <option value="Christening">Christening</option>
          <option value="Viewing Party">Viewing Party</option>
          <option value="WUPHF.com">WUPHF.com</option>
          <option value="China">China</option>
          <option value="Classy Christmas">Classy Christmas</option>
          <option value="Ultimatum">Ultimatum</option>
          <option value="The Seminar">The Seminar</option>
          <option value="The Search">The Search</option>
          <option value="PDA">PDA</option>
          <option value="Threat Level Midnight">Threat Level Midnight</option>
          <option value="Todd Packer">Todd Packer</option>
          <option value="Garage Sale">Garage Sale</option>
          <option value="Training Day">Training Day</option>
          <option value="Michael's Last Dundies">Michael's Last Dundies</option>
          <option value="Goodbye, Michael">Goodbye, Michael</option>
          <option value="The Inner Circle">The Inner Circle</option>
          <option value="Dwight K. Schrute, (Acting) Manager">
            Dwight K. Schrute, (Acting) Manager
          </option>
          <option value="Search Committee">Search Committee</option>
          <option value="The List">The List</option>
          <option value="The Incentive">The Incentive</option>
          <option value="Lotto">Lotto</option>
          <option value="Garden Party">Garden Party</option>
          <option value="Spooked">Spooked</option>
          <option value="Doomsday">Doomsday</option>
          <option value="Pam's Replacement">Pam's Replacement</option>
          <option value="Gettysburg">Gettysburg</option>
          <option value="Mrs. California">Mrs. California</option>
          <option value="Christmas Wishes">Christmas Wishes</option>
          <option value="Trivia">Trivia</option>
          <option value="Pool Party">Pool Party</option>
          <option value="Jury Duty">Jury Duty</option>
          <option value="Special Project">Special Project</option>
          <option value="Tallahassee">Tallahassee</option>
          <option value="After Hours">After Hours</option>
          <option value="Test the Store">Test the Store</option>
          <option value="Last Day in Florida">Last Day in Florida</option>
          <option value="Get the Girl">Get the Girl</option>
          <option value="Welcome Party">Welcome Party</option>
          <option value="Angry Andy">Angry Andy</option>
          <option value="Fundraiser">Fundraiser</option>
          <option value="Turf War">Turf War</option>
          <option value="Free Family Portrait Studio">
            Free Family Portrait Studio
          </option>
          <option value="New Guys">New Guys</option>
          <option value="Roy's Wedding">Roy's Wedding</option>
          <option value="Andy's Ancestry">Andy's Ancestry</option>
          <option value="Work Bus">Work Bus</option>
          <option value="Here Comes Treble">Here Comes Treble</option>
          <option value="The Boat">The Boat</option>
          <option value="The Whale">The Whale</option>
          <option value="The Target">The Target</option>
          <option value="Dwight Christmas">Dwight Christmas</option>
          <option value="Lice">Lice</option>
          <option value="Suit Warehouse">Suit Warehouse</option>
          <option value="Customer Loyalty">Customer Loyalty</option>
          <option value="Junior Salesman">Junior Salesman</option>
          <option value="Vandalism">Vandalism</option>
          <option value="Couples Discount">Couples Discount</option>
          <option value="Moving On">Moving On</option>
          <option value="The Farm">The Farm</option>
          <option value="Promos">Promos</option>
          <option value="Stairmageddon">Stairmageddon</option>
          <option value="Paper Airplane">Paper Airplane</option>
          <option value="Livin' the Dream">Livin' the Dream</option>
          <option value="A.A.R.M.">A.A.R.M.</option>
          <option value="Finale">Finale</option>
        </select>

        <button type="submit">Add a Quote</button>
      </form>
    </div>
  );
}
