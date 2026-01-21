// Script to add Supabase storage policies via API

import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

async function addStoragePolicies() {
    console.log("🔐 Adding Supabase storage policies...\n");

    const policies = [
        {
            name: "API can insert TTS cache",
            sql: `
        CREATE POLICY "API can insert TTS cache"
        ON storage.objects FOR INSERT
        TO anon
        WITH CHECK (bucket_id = 'tts-cache');
      `,
        },
        {
            name: "Public read access to TTS cache",
            sql: `
        CREATE POLICY "Public read access to TTS cache"
        ON storage.objects FOR SELECT
        TO public
        USING (bucket_id = 'tts-cache');
      `,
        },
        {
            name: "Service role can manage TTS cache",
            sql: `
        CREATE POLICY "Service role can manage TTS cache"
        ON storage.objects FOR ALL
        TO service_role
        USING (bucket_id = 'tts-cache');
      `,
        },
    ];

    for (const policy of policies) {
        console.log(`📝 Adding policy: ${policy.name}`);

        const { data, error } = await supabase.rpc('exec_sql', {
            sql_query: policy.sql
        });

        if (error) {
            // Try alternative method using direct SQL
            console.log(`   ⚠️  RPC method failed, trying direct query...`);

            const { error: directError } = await supabase
                .from('_sql')
                .insert({ query: policy.sql });

            if (directError) {
                console.log(`   ❌ Failed: ${error.message}`);
                console.log(`   Note: You may need to add this policy manually in Supabase Dashboard`);
            } else {
                console.log(`   ✅ Added successfully`);
            }
        } else {
            console.log(`   ✅ Added successfully`);
        }
    }

    console.log("\n" + "=".repeat(60));
    console.log("NOTE: If policies failed to add via script,");
    console.log("please run the SQL manually in Supabase Dashboard:");
    console.log("Dashboard → SQL Editor → Run the queries from");
    console.log("scripts/add-supabase-policies.sql");
    console.log("=".repeat(60));
}

addStoragePolicies()
    .then(() => {
        console.log("\n✅ Policy setup complete!");
        process.exit(0);
    })
    .catch((error) => {
        console.error("\n❌ Error:", error);
        console.log("\nPlease add policies manually via Supabase Dashboard");
        process.exit(1);
    });
